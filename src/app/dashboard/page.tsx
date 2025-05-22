import { currentUser } from "@clerk/nextjs";
import { DashboardContent } from "./components/DashboardContent";

export default async function DashboardPage() {
  const user = await currentUser();
  
  // Serialize user data to plain object
  const userData = user ? {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0]?.emailAddress,
    imageUrl: user.imageUrl,
  } : null;

  return <DashboardContent user={userData} />;
} 