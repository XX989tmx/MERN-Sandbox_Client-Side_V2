import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./ArticleForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

import "./NewArticle.css";

const NewArticle = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      heading: { value: "", isValid: false },
      content: { value: "", isValid: false },
      heading2: { value: "", isValid: false },
      content2: { value: "", isValid: false },
      heading3: { value: "", isValid: false },
      content3: { value: "", isValid: false },
      heading4: { value: "", isValid: false },
      content4: { value: "", isValid: false },
      heading5: { value: "", isValid: false },
      content5: { value: "", isValid: false },
      heading6: { value: "", isValid: false },
      content6: { value: "", isValid: false },
      heading7: { value: "", isValid: false },
      content7: { value: "", isValid: false },
      heading8: { value: "", isValid: false },
      content8: { value: "", isValid: false },
      heading9: { value: "", isValid: false },
      content9: { value: "", isValid: false },
      heading10: { value: "", isValid: false },
      content10: { value: "", isValid: false },
      address: { value: "", isValid: false },
      image: { value: null, isValid: false },
      // address: { value: "", isValid: false },
      categories: { value: "", isValid: false },
      tags: { value: "", isValid: false },
      price: { value: null, isValid: false },
      downloadable: { value: null, isValid: false },
      referenceSiteName1: { value: "", isValid: false },
      referenceSiteLink1: { value: "", isValid: false },
      referenceSiteName2: { value: "", isValid: false },
      referenceSiteLink2: { value: "", isValid: false },
      referenceSiteName3: { value: "", isValid: false },
      referenceSiteLink3: { value: "", isValid: false },
    },
    false
  );

  // const [submitCount, setSubmitCount] = useState(0);

  const history = useHistory();

  const articleSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("heading", formState.inputs.heading.value);
      formData.append("content", formState.inputs.content.value);

      formData.append("heading2", formState.inputs.heading2.value);
      formData.append("content2", formState.inputs.content2.value);

      formData.append("heading3", formState.inputs.heading3.value);
      formData.append("content3", formState.inputs.content3.value);

      formData.append("heading4", formState.inputs.heading4.value);
      formData.append("content4", formState.inputs.content4.value);

      formData.append("heading5", formState.inputs.heading5.value);
      formData.append("content5", formState.inputs.content5.value);

      formData.append("heading6", formState.inputs.heading6.value);
      formData.append("content6", formState.inputs.content6.value);

      formData.append("heading7", formState.inputs.heading7.value);
      formData.append("content7", formState.inputs.content7.value);

      formData.append("heading8", formState.inputs.heading8.value);
      formData.append("content8", formState.inputs.content8.value);

      formData.append("heading9", formState.inputs.heading9.value);
      formData.append("content9", formState.inputs.content9.value);

      formData.append("heading10", formState.inputs.heading10.value);
      formData.append("content10", formState.inputs.content10.value);

      formData.append("address", formState.inputs.address.value);
      formData.append("author", auth.userId);
      formData.append("image", formState.inputs.image.value);
      formData.append("categories", formState.inputs.categories.value);
      formData.append("tags", formState.inputs.tags.value);
      formData.append("price", formState.inputs.price.value);
      formData.append("downloadable", formState.inputs.downloadable.value);
      formData.append("referenceSiteName1", formState.inputs.referenceSiteName1.value);
      formData.append("referenceSiteLink1", formState.inputs.referenceSiteLink1.value);
      formData.append("referenceSiteName2", formState.inputs.referenceSiteName2.value);
      formData.append("referenceSiteLink2", formState.inputs.referenceSiteLink2.value);
      formData.append("referenceSiteName3", formState.inputs.referenceSiteName3.value);
      formData.append("referenceSiteLink3", formState.inputs.referenceSiteLink3.value);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/articles",
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push(`/${auth.userId}/articles`);
    } catch (err) {}

    // setSubmitCount(prev => prev+=1);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="new-article-container">
        <div className="main-container">
          <form
            className="article-form card-box"
            onSubmit={articleSubmitHandler}
          >
            {isLoading && <LoadingSpinner asOverlay />}
            <Input
              id="title"
              element="input"
              type="text"
              label="Title"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title."
              onInput={inputHandler}
            />
            <Input
              id="heading"
              element="input"
              type="text"
              label="heading"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content"
              element="textarea"
              label="content"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading2"
              element="input"
              type="text"
              label="heading2"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content2"
              element="textarea"
              label="content2"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading3"
              element="input"
              type="text"
              label="heading3"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content3"
              element="textarea"
              label="content3"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading4"
              element="input"
              type="text"
              label="heading4"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content4"
              element="textarea"
              label="content4"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading5"
              element="input"
              type="text"
              label="heading5"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content5"
              element="textarea"
              label="content5"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading6"
              element="input"
              type="text"
              label="heading6"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content6"
              element="textarea"
              label="content6"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading7"
              element="input"
              type="text"
              label="heading7"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content7"
              element="textarea"
              label="content7"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading8"
              element="input"
              type="text"
              label="heading8"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content8"
              element="textarea"
              label="content8"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading9"
              element="input"
              type="text"
              label="heading9"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content9"
              element="textarea"
              label="content9"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="heading10"
              element="input"
              type="text"
              label="heading10"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid heading."
              onInput={inputHandler}
            />
            <Input
              id="content10"
              element="textarea"
              label="content10"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="address"
              element="input"
              label="Address"
              placeholder="Address"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="categories"
              element="input"
              label="categories"
              placeholder="categories"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="tags"
              element="input"
              label="tags"
              placeholder="tags"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="price"
              element="input"
              label="price"
              placeholder="price"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="downloadable"
              element="input"
              label="downloadable"
              placeholder="downloadable"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="referenceSiteName1"
              element="input"
              label="referenceSiteName1"
              placeholder="referenceSiteName1"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="referenceSiteLink1"
              element="input"
              label="referenceSiteLink1"
              placeholder="referenceSiteLink1"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="referenceSiteName2"
              element="input"
              label="referenceSiteName2"
              placeholder="referenceSiteName2"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="referenceSiteLink2"
              element="input"
              label="referenceSiteLink2"
              placeholder="referenceSiteLink2"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="referenceSiteName3"
              element="input"
              label="referenceSiteName3"
              placeholder="referenceSiteName3"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="referenceSiteLink3"
              element="input"
              label="referenceSiteLink3"
              placeholder="referenceSiteLink3"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
            {/* <Input element="input" type="radio" label="radio" placeholder="radio" />
        <Input element="input" type="email" label="email" placeholder="email" />
        <Input
          element="input"
          type="password"
          label="password"
          placeholder="password"
        />
        <Input
          element="input"
          type="checkbox"
          label="checkbox"
          placeholder="checkbox"
        /> */}
            <Button btnBlack type="submit">
              ADD ARTICLE
            </Button>
          </form>
        </div>
        {/* <div className="side-container"></div> */}
      </div>
    </React.Fragment>
  );
};

export default NewArticle;
