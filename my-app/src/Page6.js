import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Page7 from "./Page7";

const Page6 = () => {
    const [done, setDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDone(true);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (done) {
        return <Page7/>;
    }

    return (
        <div style={styles.container}>
            <ReactLoading type="spin" color="orange" height={50} width={50} />
            <div>
                <p className="text-1xl lg:text-3xl md:text-2xl sm:text-2xl p-6 text-black font-semibold">Finding learning path recommendations for you based on your responses</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust as needed
    },
};

export default Page6;
