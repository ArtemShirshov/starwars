import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { peopleService } from 'services/People.service';

export const CharacterPageViewModel = () => {
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [character, setCharacter] = useState<any>({});
  const [formState, setFormState] = useState({});

  const { id } = useParams();

  const fetchCharacter = useCallback(() => {
    setLoading(true);

    try {
      peopleService
        .getPeople({
          id,
        })
        .then(({ data }) => {
          setCharacter(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [id]);

  const onSubmit = useCallback(() => {
    setCharacter({
      ...character,
      ...formState,
    });
    setEditing(false);
  }, [character, formState]);

  const onChange = useCallback((e: any) => {
    setFormState({
      [e.target.name]: e.target.value,
    });
  }, []);

  const onReset = useCallback(() => {
    setFormState({});
    setEditing(false);
  }, []);

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    character,
    editing,
    id,
    loading,
    onChange,
    onReset,
    onSubmit,
    setEditing,
  } as const;
};
