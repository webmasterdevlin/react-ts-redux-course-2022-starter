import { Formik } from "formik";
import * as yup from "yup";
import SharedForm from "../components/SharedForm";

type Props = {
  handleCreateAction: (values: any) => any;
  hasDispatch?: boolean;
};

const FormSubmission = ({ handleCreateAction, hasDispatch = false }: Props) => {
  const dispatch: any = {};
  return (
    <Formik
      initialValues={{
        id: "",
        firstName: "",
        lastName: "",
        house: "",
        knownAs: "",
      }}
      validationSchema={yup.object({
        firstName: yup.string().label("First Name").min(2).required(),
        lastName: yup.string().label("Last Name").min(2).required(),
        house: yup.string().label("House").required(),
        knownAs: yup.string().label("Known as"),
      })}
      onSubmit={(values, actions) => {
        if (hasDispatch) {
          //TODO: dispatch action
        } else {
          //TODO: handleCreateAction
        }
        actions.resetForm();
      }}
    >
      {() => <SharedForm />}
    </Formik>
  );
};

export default FormSubmission;
