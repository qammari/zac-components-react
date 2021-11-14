import { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex-grow flex flex-col">
        <Switch.Label as="span">
          <span className="text-16 font-medium text-positive-primary">Annual billing </span>
        </Switch.Label>
        <Switch.Description as="span" className="text-14 text-positive-tertiary">
          Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-accent-primary' : 'bg-positive-quaternary',
          'relative inline-flex flex-shrink-0 p-04 h-28 w-48 border-02 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-02 focus:ring-offset-02 focus:ring-blue-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-20' : 'translate-x-0',
            'pointer-events-none inline-block h-20 w-20 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}