import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./CommentEdit.css"

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleEdit = props.supports.find(support => support.id === Number(id))
      setFormData({
        name: singleEdit.name
      });
    }
    if (props.supports.length) {
      prefillFormData();
    }
  }, [props.supports, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="edit-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleEditUpdate(id, formData);
          }}
        >
          <h3 id="edit-comment-title">Edit Comment</h3>
          <label>
            Description:
            <input
              type='textarea'
              name='description'
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}