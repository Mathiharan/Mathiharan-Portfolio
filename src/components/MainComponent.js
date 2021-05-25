import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postFeedback, fetchLeaders, fetchDoc } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Achievements from "./Achievements";
import Skills from "./Skills";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
    documents: state.documents,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },

  fetchDoc: () => {
    dispatch(fetchDoc());
  },
  
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    ),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchLeaders();
    this.props.fetchDoc();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          leader1={
            this.props.leaders.leaders.filter((leader1) => leader1.featured1)[0]
          }
          leader2={
            this.props.leaders.leaders.filter((leader2) => leader2.featured2)[0]
          }
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    };

    const HeaderPage = () => {
      return <Header document={this.props.documents.documents.filter((document) => document.featured)[0]} />;
    };

    console.log(this.props.leaders);

    return (
      <>
        <HeaderPage />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/skill" component={Skills} />
              <Route exact path="/achievements" component={Achievements} />
              <Route
                exact
                path="/contactme"
                component={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
