
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { formDataState, postFormData, postResultState, } from './state';

const FormData = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const setPostFormData = useSetRecoilState(postFormData);
  const postResult = useRecoilValue(postResultState);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostFormData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
<p>Success: {JSON.stringify(postResult)}</p>
    </div>
  );
};

export default FormData;
