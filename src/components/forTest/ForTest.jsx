import React from 'react'
import {connect} from "react-redux";
import host from  '../../utils/host';
import {postsApi} from "./../../api/api";
import {setStateNewPost} from "./../../redux/home-reducer.jsx"
const axios = require("axios");




class ForTest extends React.Component {

    constructor(props) {

        super(props);
        this.state ={
            file: null,
            img:null,
            textpost:null,
            upload:false
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.textPost = this.textPost.bind(this);
        this.onFormSubmit2 = this.onFormSubmit2.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("https://calccake.ru/posts/newpostimg",formData,config)
        .then((response) => {
            //alert("The file is successfully uploaded");
            console.log(response);
            this.setState({img:response.data.nameFile});
        }).catch((error) => {
        });
    }
    onFormSubmit2(e){

        e.preventDefault();
        const formData = new FormData();
        formData.append('img',this.state.img);
        formData.append('text',this.state.textPost);
        
       postsApi.setNewPost({img:this.state.img,text:this.state.textPost})
        .then((response) => {
            //alert("The file is successfully uploaded");
            console.log(response);
            this.props.setStateNewPost(response[0]);
            this.setState({upload:true});

        }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    textPost(e){
        console.log(e.target.value);

        this.setState({textPost:e.target.value});
    }

    render() {
        if(this.state.upload) return(
            <h1>Пост загружен</h1>
            )
        if(this.state.img!==null)

            return(
                <div>
                <img style={{"width":'200px'}} src={host+'/posts/'+this.state.img} alt={this.state.img}/>
                <form onSubmit={this.onFormSubmit2}>

                <h1>Описание поста</h1>
                <textarea name="" id="" cols="30" rows="10" placeholder="Описание поста"
                onChange={this.textPost}>{this.state.textPost}</textarea>
                <button type="submit">Запостить</button>
                </form>

                </div>
                )

        return (


            <form onSubmit={this.onFormSubmit}>

            <h1>File Upload</h1>
            <input type="file" name="myImage" onChange= {this.onChange} />
            <button type="submit">Upload</button>
            </form>

            )
    }
}

const ContForTest = connect(null,{setStateNewPost})(ForTest);
export default ContForTest;
