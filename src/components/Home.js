import { useRef } from "react";
import ProductsDisplay from "./ProductsDisplay";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Navbar from "./Navbar";
import { filterCart, filterPop, clearFilter } from "./Redux/actions";
const Home = ({
  products,
  filterCart,
  filterPop,
  filter,
  cart,
  clearFilter,
}) => {
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const main = useRef();
  const handleCheck = (e) => {
    if (e.target.checked) {
      first.current.checked = true;
      second.current.checked = true;
      third.current.checked = true;
      fourth.current.checked = true;
      filterCart("tshirt");
      filterCart("shoes");
      filterCart("laptops");
      filterCart("drinks");
    } else if (e.target.checked === false) {
      first.current.checked = false;
      second.current.checked = false;
      third.current.checked = false;
      fourth.current.checked = false;
      clearFilter();
    }
  };

  const clickFunction = (e) => {
    if (main.current.checked) {
      main.current.checked = false;
      filterPop(e.target.value);
    }
    if (!main.current.checked && e.target.checked) {
      filterCart(e.target.value);
    } else {
      filterPop(e.target.value);
    }
  };
  return (
    <>
      <Navbar />
      <div className="filter">
        <p className="headline-text">Категории</p>

        <div className="checkbox-div">
          <input
            ref={main}
            type="checkbox"
            onChange={handleCheck}
            value=""
            name=""
            id="main"
          />
          <label htmlFor="main">Выбрать все</label>
        </div>

        <div className="checkbox-div">
          <input
            type="checkbox"
            ref={second}
            onClick={clickFunction}
            value="shoes"
            name=""
            id="shoes"
          />
          <label htmlFor="shoes">Обувь</label>
        </div>

        <div className="checkbox-div">
          <input
            type="checkbox"
            ref={third}
            onClick={clickFunction}
            value="drinks"
            name=""
            id="drinks"
          />
          <label htmlFor="drinks">Напитки</label>
        </div>
        <div className="checkbox-div">
          <input
            type="checkbox"
            ref={fourth}
            onClick={clickFunction}
            value="laptops"
            name=""
            id="laptops"
          />
          <label htmlFor="laptops">Ноутбуки</label>
        </div>
        <div className="checkbox-div">
          <input
            ref={first}
            type="checkbox"
            onClick={clickFunction}
            value="tshirt"
            name=""
            id="clothes"
          />
          <label htmlFor="clothes">Одежда</label>
        </div>
      </div>

      <ProductsDisplay filter={filter} cart={cart} products={products} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.allProducts,
    cart: state.itemCount,
    filter: state.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { filterCart: filterCart, filterPop: filterPop, clearFilter: clearFilter },

    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
