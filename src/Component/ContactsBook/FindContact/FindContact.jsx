import PropTypes from "prop-types";
export const FindContact = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

FindContact.propTypes = {
  onChange: PropTypes.func.isRequired,
};
