import React from 'react';

const RatingForm = ({ select, setSelect, setSubmitMessage }) => {

    const ratings = [1, 2, 3, 4, 5];
    const submit = (e) => {
        e.preventDefault();
        return select === 0 ? alert('Please select a number') : setSubmitMessage(!false);
    };

    return (
        <>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="ratings">
                {
                    ratings.map((rating) => (
                        <span
                            key={`option-${rating}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelect(rating);
                                console.log(rating);
                            }}
                            className={select === rating ? "selected" : null}>
                            {rating}
                        </span>
                    ))
                }
            </div>
            <button type="button" onClick={submit}>SUBMIT</button>
        </>
    );
};

export default RatingForm;