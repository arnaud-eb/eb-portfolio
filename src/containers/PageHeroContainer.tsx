import { connect } from "react-redux";

import PageHero from "../components/PageHero";

import { IState } from "../types";

const mapStateToProps = ({ next }: Pick<IState, "next">) => ({
  next,
});

const PageHeroContainer = connect(mapStateToProps)(PageHero);

export default PageHeroContainer;
