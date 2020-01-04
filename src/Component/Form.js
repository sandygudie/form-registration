import React from 'react'
// import './form.css'

export default function Form({onchange,  gender,
   firstname,favcar,phonenumber,email, lastname , onClickhandle,message,visibility,
    javascript,Nodejs,Express}) {
   
// Another way of toggling checkbox
// toggleVisibility(){
   
//    this.setState( state=> ({
//        visibility: !state.visibility
     
//    }))
//    console.log( this.state.visibility)
//     }

 
        // let getStyle = {
        //     border:"2px solid blue"
        // }
        
        return (
            
            <div className="FormContainer">
                
            <form  onSubmit = {onClickhandle}>
            <div className="inputcontainer">
            <div >
            <label>FirstName * </label>
            <input id="firstname" onChange={onchange}  
            value={firstname}
            placeholder="FirstName" 
            name="firstname" 
            required type="text" />
            </div>
            
           
            <div >
            <label>LastName * </label>
            <input id="lastname" onChange={onchange}  
            value={lastname}
            placeholder="LastName" 
            name="lastname" 
            required type="text" />
            </div>

            </div>

           <div className="emailaddress">
           <label>Email Address *</label>
            <input  id="email"onChange={onchange} value={email} placeholder="Email Address" name="email" type="email"/> 
           </div>

           <div  className="number">
           <label>Phone Number *</label>
            <input id="phonenumber"  onChange={onchange} value={phonenumber} placeholder="Phone Number" required name ="phonenumber" type ="tel"/>
            
           </div>

           <div className="all">  
 
                <div className="genderlevel"> 
                        <div id="gender">
                        <span id="genderlabel" >Gender *</span>
                            <input  onChange={onchange} checked={gender ==="Male"} value="Male" name="gender" type="radio"/> Male
                            <br />
                            <input onChange={onchange} checked={gender ==="Female"} value="Female" name="gender" type="radio"/>Female 
                        </div>

                        <div className="skills" >
                        <span id="genderlabel">Skills Level *</span>
                    <select  className="skillslevel" name="favcar" value={favcar} onChange={onchange} >
                        <option >-----Select an option---</option>
                        <option >Newbie</option>
                        <option >Beginner</option>
                        <option >Intermediate</option>
                        <option value="Expert">Expert</option>
                        <option value="Fan">A Tech Fan</option>
                        </select>
                        </div>
                </div>

                    <div className="tech">
                    <span id="genderlabel">Tech Interest *</span>
                        <input type="checkbox" id="checkbox1"  checked={javascript}  name="javascript" onChange={onchange} /> Web Development using Javascript and Nodejs <br />
                        <br />
                        <input type="checkbox" id="checkbox2"  checked={Nodejs }  name="Nodejs" onChange={onchange} />Web Development using Python <br />
                        <br />
                        <input type="checkbox" id="checkbox3"  checked={Express} name="Express" onChange={onchange} />Javascript libraries e.g React , Angular, Vuejs  <br />
                    
                    </div>
           
        </div>
            <div className="aboutyou">
            <span id="genderlabel">Tell us about you</span>
            <textarea onChange={onchange} value={message} name="message" rows="15" cols="80" placeholder="Drop a message"/>
            </div>
           
            


           <div id="div-checkbox">
               <input type="checkbox" id="checkbox4" checked={visibility} name="visibility" onChange={onchange}  required/>
            {/* style={{textDecoration: this.state.visibility? "line-through":"none"}} */}
               <span >By signing up,you agree to the <a href="www.google.com"> Term Of Service </a></span>
           </div>

           <input id ="btn" type="submit"  value="Submit" />
           


            </form>

            


            </div>
        )
    
}
// todos...i want to toggle the checkbox based on the gender. 
// i want a strike through if toggle on

// i want to submit my form to another html(carring list of input made)
// i want if the password is not a number, a h1 tage will show" a number required"