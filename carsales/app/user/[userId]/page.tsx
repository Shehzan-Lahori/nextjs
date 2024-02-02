interface UserIdInterface {
    params: {userId: string;};
}

const Page = ({params}: UserIdInterface) => {
    return(
        <div>
            i am children number {params.userId}
            
        </div>
    )
}
export default Page;