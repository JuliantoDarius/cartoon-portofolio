import dynamic from "next/dynamic";

const ComponentView = dynamic(() => import("@/views/components"));

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ComponentView;
