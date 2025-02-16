export type Messages={success:boolean,data:userMessageObject}
export type MessageObject={
        id: string,
        text: string,
        clientId: string,
        timestamp: string,
        isFromAgent: boolean
    }
    export type MessageData={
        clientId: string,messages:MessageObject[],unread:string
    }
