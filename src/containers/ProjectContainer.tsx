import { connect } from "react-redux";

import Project from "../components/Project";

import { IState } from "../types";

const mapStateToProps = ({ next }: Pick<IState, "next">) => ({
  next,
});

const ProjectContainer = connect(mapStateToProps)(Project);

export default ProjectContainer;
