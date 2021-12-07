import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ISigninAuth } from '@gmahechas/erp-common';
import { WcInput, WcButton } from '@gmahechas/common-webcomponents-react';

interface IProps {
    onLogin: (data: ISigninAuth) => void;
}
const Login: FC<IProps> = ({ onLogin }) => {
    const { control, handleSubmit, formState } = useForm<ISigninAuth>();
    const onSubmit = handleSubmit((data) => onLogin(data));

    return (
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
            <WcButton type='submit' button-style='raised'>
                Signin
            </WcButton>
        </form>
    );
};

export default Login;
