import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from './../index';
import NumberInput from '../NumberInput/NumberInput';
import styled from 'styled-components';

export const Form = ({ setDataSet, dataSet }) => {
  const [dataValue, setDataValue] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataSet([...dataSet, dataValue]);
    setDataValue('');
    inputRef.current.focus();
  };

  return (
    <FormContainer data-testid="form-container">
      <InputTableGroup>
        <div>
          <NumberInput
            testid="datapoint"
            ref={inputRef}
            tabIndex={0}
            value={dataValue}
            autoFocus={true}
            setValue={setDataValue}
          />
        </div>
      </InputTableGroup>
    </FormContainer>
  );
};

Form.propTypes = {
  setDataSet: PropTypes.func.isRequired,
  dataSet: PropTypes.array.isRequired,
};

Form.defaultProps = {
  setDataSet: () => null,
  dataSet: [],
};

export default Form;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  min-width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondarybg);
`;


