import Loader from "./Loader";
import Option from "../Dto/Option";
import RequestParameters from "../Dto/RequestParameters";

export default class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/',
      new Set([new Option(RequestParameters.ApiKey, "11cd35b458b14d05a2b54fbbb9e1a42f")]));
  }
}