import { signOut } from "@/app/utils/Auth";
import {requireUser} from "@/app/utils/hooks";



export default async function DashboardRoute() {
  const session = await requireUser();

  return (
    <>
      <div>
        Hello dashboard routes
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </div>
    </>
  );
}
