// 

import { Button } from "@/components/ui/button"


export const MainNav = ()=>{

    return(
        <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        //   onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
    )
}