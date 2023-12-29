import { useFormik } from "formik";
import { supBasicInfoRoute } from "../../../../utils/AppRoutesConfig";
import { Editor, EditorState } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";

const BasicInformation = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const {
    data: { data },
  } = supBasicInfoRoute.useLoader();

  const { values, handleChange, handleSubmit, isValid, handleReset } =
    useFormik({
      initialValues: {
        name: data.attributes.name,
        description: data.attributes.description,
        email: data.attributes.email,
        featured: data.attributes.featured,
        import_url: data.attributes.import_url,
        api_key: data.attributes.api_key,
      },
      onSubmit: (_) => {
        // TODO: Do something here
      },
    });

  return (
    <form onChange={handleChange} onReset={handleReset}>
      <div className="grid grid-cols-2 w-full gap-3">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input type="text" className="input input-bordered" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input type="email" className="input input-bordered" />
        </label>
        <label className="form-control col-span-2">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <Editor editorState={editorState} />
        </label>
      </div>
    </form>
  );
};

export default BasicInformation;
