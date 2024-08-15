import React from "react";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../utils";
import Button from "../common/Button";

interface AddProductFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  category: HTMLSelectElement;
  image: HTMLInputElement;
}

interface AddProductForm extends HTMLFormElement {
  readonly elements: AddProductFormElements;
}
interface UserInterface{
    user:object;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    logOut: () => Promise<void>;
}

const AddProduct: React.FC = () => {
  const { user } = useAuth() as UserInterface;

  const handleSubmit = async (e: React.FormEvent<AddProductForm>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const category = form.elements.category.value;
    const image = form.elements.image.files?.[0];

    if (image) {
      try {
        const imageUrl = await imageUpload(image);
        console.log({ imageUrl, name, category, user });
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    } else {
      console.error("No image file selected.");
    }
  };

  return (
    <div>
   <form onSubmit={handleSubmit} className="space-y-6 lg:w-3/5 mx-auto">
        <div>
            <h3 className="text-3xl text-center my-5">Add Product</h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          
         
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Category
            </label>
            <select
              name="category"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            >
                <option value="btn">btn</option>
                <option value="btn">btn</option>
                <option value="btngfg">btndgfh</option>
                <option value="btn">btn</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Select Image:
            </label>
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>
        </div>

        <Button name="add product"></Button>
      </form>
    </div>
  );
};

export default AddProduct;



