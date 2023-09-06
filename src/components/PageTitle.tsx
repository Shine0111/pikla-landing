import { Helmet } from "react-helmet";

interface Props {
  titleAddOn?: string;
}

const PageTitle = ({ titleAddOn }: Props) => {
  return (
    <>
      <Helmet>
        <title>
          {titleAddOn} {titleAddOn ? "|" : ""} Pikla
        </title>
        <link rel="icon" type="image/png" href="./src/assets/favicon.png" />
      </Helmet>
    </>
  );
};

export default PageTitle;
