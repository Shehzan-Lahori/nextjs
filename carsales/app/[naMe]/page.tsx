interface UserIdPageProps {
    params:{
        naMe : string;
    }
}
const Page = ({params} : UserIdPageProps) => {
    return (
        <div>
            {params.naMe}
        </div>
    );
};
export default Page;