export default function Main() {
  return <></>;
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/login",
      permanent: true,
      // statusCode: 301
    },
  };
}
