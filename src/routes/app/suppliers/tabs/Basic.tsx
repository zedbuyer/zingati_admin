import { useFormik } from "formik";
import { supBasicInfoRoute } from "../../../../utils/AppRoutesConfig";
import { useMutation } from "@tanstack/react-query";
import { saveBasicSupplier } from "../../../../utils/queries/app/suppliers";
import SaveButton from "../../../../components/app/SaveButton";
// import { useState } from "react";

const BasicInformation = () => {
  const {
    data: { data },
  } = supBasicInfoRoute.useLoader();
  const { supplierId } = supBasicInfoRoute.useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: saveBasicSupplier,
    mutationKey: ["save_basic_info"],
    onSuccess: () => {
      alert("Supplier saved!");
    },
    onError: () => {
      alert("Unable to save supplier information");
    },
  });

  const { values, handleChange, handleSubmit, isValid, handleReset } =
    useFormik({
      initialValues: {
        name: data.attributes.name,
        description: data.attributes.description,
        email: data.attributes.email,
        featured: data.attributes.featured,
      },
      onSubmit: (values) => {
        if (isValid) {
          mutate({
            id: supplierId,
            data: values,
          });
        }
      },
    });

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} onReset={handleReset}>
      <div className="grid grid-cols-2 w-full mb-5 gap-3">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            name="name"
            className="input input-bordered"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            className="textarea textarea-bordered"
          />
        </label>
        <label className="form-control col-span-2">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            name="description"
            onChange={handleChange}
            value={values.description}
            className="input input-bordered"
            style={{
              height: 200,
            }}
          ></textarea>
        </label>
        <div className="flex">
          <div className="form-control">
            <label htmlFor="" className="label cursor-pointer">
              <span className="label-text mr-5">Supplier Featured?</span>
              <input
                type="checkbox"
                checked={Boolean(values.featured)}
                onChange={handleChange}
                name="featured"
                className="toggle"
              />
            </label>
          </div>
        </div>
      </div>
      <SaveButton title="Save" isPending={isPending} />
    </form>
  );
};

export default BasicInformation;
