import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';


export const action = async ({ request }) => {

  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg)

  }

}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>our newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input name="name" id="name" className="form-input" defaultValue='john'></input>
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">last name</label>
        <input name="lastName" id="lastName" className="form-input" defaultValue='smyth' required></input>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input name="email" id="email" className="form-input" defaultValue='test@test.com' required></input>
      </div>
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
    </Form >

  )
}

export default Newsletter
