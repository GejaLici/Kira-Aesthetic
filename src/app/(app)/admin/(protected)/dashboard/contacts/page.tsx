'use client';
import { useMemo, useState } from 'react';
import { collection, query, orderBy, type Timestamp } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from '@/components/ui/skeleton';
import { format, isToday, isWithinInterval, startOfMonth, endOfMonth, subDays } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
  submittedAt: Timestamp;
};

export default function ContactsPage() {
  const firestore = useFirestore();
  const [selectedSources, setSelectedSources] = useState<string[]>(['all']);
  const [dateFilter, setDateFilter] = useState('all');
  
  const contactsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'contacts'), orderBy('submittedAt', 'desc'));
  }, [firestore]);

  const { data: contacts, loading } = useCollection<ContactSubmission>(contactsQuery);

  const uniqueSources = useMemo(() => {
    if (!contacts) return [];
    const sources = new Set(contacts.map(c => c.source || 'Unknown'));
    return ['all', ...Array.from(sources)];
  }, [contacts]);

  const filteredContacts = useMemo(() => {
    if (!contacts) return [];
    
    const now = new Date();

    const sourceFiltered = contacts.filter(c => {
        if (selectedSources.includes('all')) return true;
        return selectedSources.includes(c.source || 'Unknown');
    });

    const dateFiltered = sourceFiltered.filter(c => {
        if (!c.submittedAt) return false;
        const submittedDate = c.submittedAt.toDate();
        switch (dateFilter) {
            case 'today':
                return isToday(submittedDate);
            case '7days':
                return isWithinInterval(submittedDate, { start: subDays(now, 7), end: now });
            case '30days':
                return isWithinInterval(submittedDate, { start: subDays(now, 30), end: now });
            case 'month':
                return isWithinInterval(submittedDate, { start: startOfMonth(now), end: endOfMonth(now) });
            case 'all':
            default:
                return true;
        }
    });

    return dateFiltered;
  }, [contacts, selectedSources, dateFilter]);

  const groupedContacts = useMemo(() => {
    if (!filteredContacts) return {};
    return filteredContacts.reduce((acc, contact) => {
      if (!contact.submittedAt) return acc;
      const month = format(contact.submittedAt.toDate(), 'MMMM yyyy');
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(contact);
      return acc;
    }, {} as Record<string, ContactSubmission[]>);
  }, [filteredContacts]);


  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return format(date, 'PPP p');
  };

  const handleSourceSelect = (source: string) => {
    setSelectedSources(prev => {
      if (source === 'all') {
        return prev.includes('all') ? prev.filter(s => s !== 'all') : ['all'];
      }
      
      const newSelection = prev.filter(s => s !== 'all');

      if (newSelection.includes(source)) {
        return newSelection.filter(s => s !== source);
      } else {
        return [...newSelection, source];
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>
                  Here are the messages received through your website's contact form.
                </CardDescription>
            </div>
             <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Filter by date..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Time</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                </Select>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-1 w-full sm:w-auto">
                        <ListFilter className="h-4 w-4" />
                        <span>Filter Sources ({selectedSources.includes('all') ? 'All' : selectedSources.length})</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[220px]">
                      <DropdownMenuLabel>Filter by source</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {uniqueSources.map(source => (
                         <DropdownMenuCheckboxItem
                            key={source}
                            checked={selectedSources.includes(source)}
                            onCheckedChange={() => handleSourceSelect(source)}
                         >
                            {source === 'all' ? 'All Sources' : source}
                         </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Date</TableHead>
                <TableHead className="w-[180px]">Name</TableHead>
                <TableHead>Email & Phone</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="w-[150px]">Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                <TableCell><Skeleton className="h-5 w-full" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        {!loading && Object.keys(groupedContacts).length === 0 && (
            <div className="h-24 text-center flex items-center justify-center text-muted-foreground">
                No contact messages found for the selected filter.
            </div>
        )}
        {!loading && Object.entries(groupedContacts).map(([month, monthContacts]) => (
            <div key={month} className="mb-10">
                <h2 className="text-xl font-semibold mb-4 sticky top-0 bg-background py-2">{month}</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px] hidden md:table-cell">Date</TableHead>
                            <TableHead className="w-[180px]">Name</TableHead>
                            <TableHead>Email & Phone</TableHead>
                            <TableHead>Message</TableHead>
                             <TableHead className="w-[150px] hidden sm:table-cell">Source</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {monthContacts.map((contact) => (
                            <TableRow key={contact.id}>
                                <TableCell className="font-medium text-sm hidden md:table-cell">{formatDate(contact.submittedAt)}</TableCell>
                                <TableCell className="text-sm font-semibold">{contact.name}</TableCell>
                                <TableCell>
                                  <div className="text-sm text-muted-foreground">{contact.email}</div>
                                  <div className="text-xs">{contact.phone || 'N/A'}</div>
                                </TableCell>
                                <TableCell className="text-sm">{contact.message}</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge variant="outline">{contact.source || 'Unknown'}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        ))}
      </CardContent>
    </Card>
  );
}