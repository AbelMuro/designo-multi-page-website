import {useCallback} from 'react';

function RefCallback(image){
    const callback = useCallback((ref) => {
            if(!ref)
                return;
            else
                ref.style.backgroundImage = `url('${image}')`
    },[])

    return callback;
}

export default RefCallback;