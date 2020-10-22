import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const ArticleCommentInput = (props) => {
  return (
    <div>
      <form onSubmit={props.submitCommentHandler}>
        <Input
          id="comment"
          element="textarea"
          label="comment"
          placeholder="Write your comment here"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid comment (at least 5 characters)."
          onInput={props.inputHandler}
        />
        <Button btnBlack type="submit">
          Submit Comment
        </Button>
      </form>
    </div>
  );
};

export default ArticleCommentInput;
