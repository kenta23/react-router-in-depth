import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact () {
    const data = useActionData();
    
    return (
        <div className="contact">
        <Form method="post" action="/help/contact">
            <h3>Contact us</h3>
             <label>
                 <span>Your email: </span>
                 <input type='email' name='email' required/>
             </label>   
              <label>
                 <span>Your message: </span>
                 <textarea  name='message' required/>
             </label>   
                
                <button>Submit</button>

          {data && data.error && <p>{data.error}</p>}
        </Form>
         </div>
    )
}

export const contactAction = async ({ request }) => {
    const data = await request.formData();
    
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    
    if(submission.message.length <= 10) {
        return {error: 'Message must be over 10 characters long!'}
    }
    //redirect to the homepage 
    return redirect('/');
}

