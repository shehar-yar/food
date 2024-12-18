// 

import { AppState, Auth0Provider, User } from "@auth0/auth0-react"
import React from "react"



type Props = {
    children: React.ReactNode
}

export const Auth0ProviderWithNevigate = ({children}: Props)=>{
    
    const domain = import.meta.env.VITE_AUTH0_DOMAIN

    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL

    if(!domain || !clientId || !redirectUri){
        throw new Error("Unable to initialise auth")
    }

    const onRedirectCallback = (appState?: AppState, user?: User)=>{

        console.log("USER", user);
        

    }
    
    return(
        <Auth0Provider 
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}