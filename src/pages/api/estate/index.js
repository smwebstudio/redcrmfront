// import { GetServerSideProps } from "next";
//
//
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//     let searchResults = [];
//     const searchTerm = query.search;
//
//     if (searchTerm && searchTerm.length > 0) {
//         const response = await fetch(`http://localhost:3000/api/search`, {
//             body: JSON.stringify({ searchTerm }),
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             method: "POST"
//         });
//
//         searchResults = await response.json();
//     }
//
//     return {
//         props: {
//             // Will be passed to the page component as props
//             searchResults
//         }
//     };
// };
//
// const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
//     const hasResults = searchResults.length > 0;
//
//     return (
//         <>
//             <section className="flex flex-col items-center gap-y-5">
//                 {hasResults ? (
//                     <div className={`flex flex-col space-y-8`}>
//                         {searchResults.map((result, idx) => {
//                             return <SearchResult key={idx} {...result} />;
//                         })}
//                     </div>
//                 ) : (
//                     <p>No results found.</p>
//                 )}
//             </section>
//         </>
//     );
// };
//
// export default Results;
//
// Results.getLayout = (page) => {
//     return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
// };
