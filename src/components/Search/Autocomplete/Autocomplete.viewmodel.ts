import { useCallback, useEffect, useState } from 'react';

import { peopleService } from 'services/People.service';
import { CharacterType } from '../../../store/CharacterItems';

export const AutocompleteViewModel = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacter = useCallback(({ name }: { name?: string } = {}) => {
    setLoading(true);

    return peopleService
      .getPeople({
        params: {
          search: name,
        },
      })
      .then(({ data }) => {
        return data.results.map((item: CharacterType) => {
          const match = item.url.match(/\/([^/]+)\/?$/);
          const id = match ? match[1] : null;
          return {
            ...item,
            id,
          };
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onChange = useCallback(
    (e: any) => {
      if (e.target.value === '') {
        setOptions([]);

        return;
      }

      fetchCharacter({
        name: e.target.value,
      }).then((data) => {
        setOptions(data);
      });
    },
    [fetchCharacter]
  );

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return {
    loading,
    onChange,
    options,
    setOpen,
  } as const;
};
