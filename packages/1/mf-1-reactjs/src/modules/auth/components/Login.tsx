import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ISigninAuth } from '@gmahechas/erp-common-js';
import { WcInput, WcButton } from '@gmahechas/common-webcomponents-react';

interface IProps {
    signin: (data: ISigninAuth) => void;
}
const Login: FC<IProps> = ({ signin }) => {
    const { control, handleSubmit } = useForm<ISigninAuth>();
    const onSubmit = handleSubmit((data) => signin(data));

    return (
        <form onSubmit={onSubmit}>
            <div className='mdc-layout-grid'>
                <div className='mdc-layout-grid__inner'>
                    <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-middle'>
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
                    </div>
                    <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-middle'>
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
                    </div>
                    <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-middle'>
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
                    </div>
                    <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-middle'>
                        <WcButton type='submit' button-style='raised'>
                            Signin
                        </WcButton>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
