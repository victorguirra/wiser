import React, { useEffect, useState } from 'react';
import { Wrapper, Container, Content, ProgressBar } from './styles';

import { AiFillCheckCircle } from 'react-icons/ai';

function Snackbar({ message, setShowSnackbar }) {
    const [progressBarWidth, setProgressBarWidth] = useState(100);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => progressBarWidth >= 0 &&
            setProgressBarWidth(progressBarWidth - 1), 15);


        if (progressBarWidth === 0) {
            setShowSnackbar(false);
        }

        return () => clearTimeout(timer);

    }, [progressBarWidth, setShowSnackbar])

    return (
        <Wrapper>

            { progressBarWidth >= 0 && (
                <Container>

                    <Content>

                        <div className="message">
                            <AiFillCheckCircle size={25} color="#fff" />
                        </div>

                        <p>{message}</p>

                        <ProgressBar width={progressBarWidth} />

                    </Content>

                </Container>
            )}

        </Wrapper>
    )
}

export default Snackbar;