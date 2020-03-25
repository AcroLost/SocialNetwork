import React, { Suspense } from 'react';
import { Spin } from 'antd';

export const withLazySuspense = (Component) => {

    return (props) => {

        return (
            <Suspense fallback={<Spin size='large' />}>
                <Component {...props} />
            </Suspense>
        );
    }
}