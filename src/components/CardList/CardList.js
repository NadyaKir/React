import Card from "../Card/Card";

import { Wrapper } from "./CardList.styled";
import withLoadingDelay from "../UI/withLoadingDelay";
import { CircleLoader } from "react-spinners";

const CardList = ({ items, handleChange, readOnly, isLoading }) => {
  return (
    <Wrapper>
      {isLoading
        ? items.map((item) => (
            <div key={item.id}>
              <CircleLoader size={60} color={"#e9967a"} loading={true} />
            </div>
          ))
        : items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              descr={item.descr}
              isChecked={item.isChecked}
              handleChange={handleChange}
              readOnly={readOnly}
            />
          ))}
    </Wrapper>
  );
};

export default withLoadingDelay(CardList);
