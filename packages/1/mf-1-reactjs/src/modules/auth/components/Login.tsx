import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { WcInput } from '@gmahechas/common-webcomponents-react';

interface FormData {
    companyKey: string;
    userName: string;
    userPassword: string;
}

const Login: FC = () => {
    const { control, handleSubmit, formState } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div>
            <form onSubmit={onSubmit}>
                <Controller
                    control={control}
                    name='companyKey'
                    defaultValue=''
                    rules={{ required: true }}
                    render={({
                        field: { name, value, onChange },
                        fieldState: { invalid, isDirty },
                    }) => (
                        <WcInput
                            name={name}
                            value={value}
                            label='Company Key'
                            required={invalid || isDirty}
                            onInputChange={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='userName'
                    defaultValue=''
                    rules={{ required: true }}
                    render={({
                        field: { name, value, onChange },
                        fieldState: { invalid, isDirty },
                    }) => (
                        <WcInput
                            name={name}
                            value={value}
                            label='userName'
                            required={invalid || isDirty}
                            onInputChange={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='userPassword'
                    defaultValue=''
                    rules={{ required: true }}
                    render={({
                        field: { name, value, onChange },
                        fieldState: { invalid, isDirty },
                    }) => (
                        <WcInput
                            name={name}
                            value={value}
                            label='userPassword'
                            required={invalid || isDirty}
                            onInputChange={onChange}
                        />
                    )}
                />
                <input type='submit' />
            </form>
        </div>
    );
};

export default Login;
