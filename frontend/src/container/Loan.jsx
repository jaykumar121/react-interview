import React from "react";
import axios from "axios";
import Table from "../components/Tables";

export default class Lolan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanData: null
    };
  }

  componentDidMount() {
    this.fetchLoanData();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.url !== this.props.url){
        this.fetchLoanData();
    }
  }

  fetchLoanData() {
    const {url} = this.props;
    axios.get(url).then(({data}) => {
      this.setState({ loanData: this.prepareDataSet(data) });
    });
  }


  prepareDataSet(raw){
    const p1 = raw.split('\n');
    const header = p1[0].split(',');
    const body = [];

    for(let i=1; i<p1.length; i++){
        body.push(p1[i].split(','))
    }

    return{
        header, body
    }
  }

  render() {
    return (
      <div>
        {this.state.loanData && <Table data={this.state.loanData}/>}
      </div>
    );
  }
}
