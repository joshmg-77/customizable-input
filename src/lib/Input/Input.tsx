import React from 'react';

/*
Possibles props 

value                 -> string
maxLength             -> number
onChange              -> Function
onBlur                -> Function
onFocus               -> Function
isDecimal             -> Boolean
placeholder           -> string
className             -> string
name                  -> string
suffix                -> string
prefix                -> string
mask                  -> string
onError               -> Function
ThousandsSeparator    -> string   **** use intl config see docs


*/
interface InputProps {
  values: string
  name: string
  placeHolder?: string
  className?: string
  prefix?: string
  suffix?: string
  mask?: string
  ThousandSeparator?: string
  onFocus?: () => void
  onHandleChange: () => void
  onBlur?: () => void
  maxLength?: number
  isDecimal?: boolean

}

const Input = (props: InputProps) => {
  const {
    values,
    name,
    placeHolder,
    className,
    onHandleChange,
    prefix,
    suffix,
    onFocus,
    onBlur,
    mask,
    maxLength,
    isDecimal,
  } = props;

  const [stValue, setValue] = React.useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // move to /utils as function
    const re = /^\d*\.?\d*$/; //rules
    if (e.target.value === '' || re.test(e.target.value)) {
      // we can remove this for lifting handled change 
      setValue(values);
    }
  };

  return (
    <div>
      <input
        type='text'
        name={name}
        value={stValue}
        onChange={handleChangeInput}
        maxLength={maxLength}
        placeholder={placeHolder}
        className={className}
      />
      <span className='mask'></span>
    </div>
  );
};

Input.defaultProps = {
  values: "",
  name: "",
  placeHolder: "",
  className: "",
  prefix: "",
  suffix: "",
  mask: "",
  ThousandSeparator: "",
  onFocus: () => {},
  onHandleChange: () => {},
  onBlur: () => {},
  maxLength: Infinity,
  isDecimal: false,
}

export default Input