'use client';

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CountrySelectValues = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    onChange: (value: CountrySelectValues) => void;
    value: CountrySelectValues;

}

const CountrySelect: React.FC<CountrySelectProps> = ({
    onChange,
    value
}) => {
    const { getAll } = useCountries();
    return (
        <div>
            <Select 
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CountrySelectValues)}
                formatOptionLabel={(option: any) => (
                    <div className="flex flex-row items-center gap-3">
                        <div>{option.flag}</div>
                        <div>
                            {option.label},
                            <span className='text-neutral-500 ml-1'>
                                {option.region}
                            </span>
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => 'p-2 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6',
                    }
                })}
            />
        </div>
    );
}
 
export default CountrySelect;