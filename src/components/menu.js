import { Component } from "react";
import { Card, CardImg } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            SelectedDish:null,
            SelectedDetail:null
        }  
    }


    onDishSelect(dish){
         this.setState({ SelectedDish: dish});
    }

    renderDish(dish){
        if (dish != null) {
            return(
                <Card className="col-12 col-md-5 m-1 mt-5">
                <div className="mt-3"><img className="img-fluid" src={dish.image}></img>
                <p>{dish.description}</p>
                     
                </div>
                </Card>
            )     
        } else {
            return(
                <div></div>
            )
        }
    }
    onDetailSelect(detail){
        this.setState({ SelectedDetail: detail});
   }

   renderDetail(detail){
       if (detail != null) {
           return(
               <Card className="col-12 col-md-5 m-1 mt-5">
           
                  <p>{detail.comment}</p> 
              
               </Card>
           )     
       } else {
           return(
               <div></div>
           )
       }
   }
 render()
 {
    const menu = this.props.dishes.map((dish) => {
        return(
        <div key= {dish.id} className="col-12 col-md-5 m-1 mt-5" >
            <Card  onClick= {() => this.onDishSelect(dish) } className="d-flex align-items-center">
                <div className="flex-shrink-0">
               <div className="mt-3"><img className="img-fluid" src={dish.image}></img> </div>
                </div>

                <div className="flex-grow-1 ms-3 ">
                {dish.name}
                {/* <p>{dish.description}</p> */}
                </div>

            </Card>
        </div>);           
})

const detail = this.props.details.map((detail) => {
    return(
    <div key= {detail.id} className="col-12 col-md-5 m-1 mt-5" >
        <Card onClick= {() => this.onDetailSelect(detail) }  className="d-flex align-items-center">
            <div className="flex-shrink-0">
                </div>

                <div className="flex-grow-1 ms-3 ">
                {detail.comment}
                {/* <p>{dish.description}</p> */}
                </div>

        </Card>
    </div>);
 }) ;


    return(
        <div className="container">
            <div className="row">
                    {menu}
                    {detail}
                    
                 
            </div>
            
            <div className="row">
                    {this.renderDish(this.state.SelectedDish)}
                    {this.renderDetail(this.state.SelectedDetail)}
                   
            </div>
        </div>
    );
 } 
}

export default Menu;
