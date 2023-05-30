'use client';

import axios from "axios";
import Container from "../components/Container";
import ListingCard from "../components/Listings/ListingCard";
import { SafeListing, SafeUser } from "../types";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Heading from "../components/Heading";

interface PropertiesClientProps {
    listings: SafeListing[];
    currentUser: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser
}) => {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/listings/${id}`)
    .then(() => {
        toast.success('Listing deleted.');
        router.refresh();
    })
    .catch(() => {
        toast.error('Something went wrong.')
    })
    .finally(() => {
        setDeletingId('');
    })
  }, [router]);

  return (
    <Container>
        <Heading 
            title="Properties"
            subtitle="List of your properties"
        />
        <div 
            className="
                mt-10
                grid
                :grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
            "
        >
            {listings.map((listing) => (
                <ListingCard 
                    key={listing.id}
                    currentUser={currentUser}
                    data={listing}
                    actionId={listing.id}
                    onAction={onCancel}
                    disabled={deletingId === listing.id}
                    actionLabel="Delete property"
                />
            ))}
        </div>
    </Container>
  )
}

export default PropertiesClient;