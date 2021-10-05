import React from 'react';
import react,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class Dishdetail extends React.Component{
        formatDate(date){
            const option = { year: 'numeric', month: 'short', day: 'numeric' };
            const date1 = new Date(date)
            const newdate = date1.toLocaleDateString("en-US", option)
            return newdate;

        }
        renderComments(comments){
            
            if(comments!=null){
                const com=comments.map(co=>{
                  
                    return (
                        <React.Fragment>
                            <li>{co.comment}</li><br />
                            <li>--{co.author}, {this.formatDate(co.date)}</li><br />
                        </React.Fragment>

                    );
                });
                return (
                    <ul className="list-unstyled">
                        {com}
                    </ul>
                )
            }
            else return(
                <div></div>
            );

        }
        renderDish(dish) {
            if (dish != null) {
                return (
                    <React.Fragment>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>

                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>

                    </React.Fragment>



                );

            }
            else {
                return (
                    <div></div>
                );
            }
        }
        render() {
            const dish = this.props.dish;

            return (
                <div className="row">
                      {this.renderDish(dish)}
                </div>

            );
         
    }
}  
export default Dishdetail;  