import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

import getCurrentUser from "../actions/getCurrentUser";
import { getListings } from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
        <EmptyState
            title="Unauthorized"
            subtitle="Please login"
        />
    )
  }

  const listings = await getListings({
    userId: currentUser.id
  });

  if (!listings.length) {
    return (
        <EmptyState
            title="No properties found"
            subtitle="Looks like you have no properties"
        />
    )
  }

  return (
    <div>
        <PropertiesClient
            currentUser={currentUser}
            listings={listings}
        />
    </div>
  )
}

export default PropertiesPage;