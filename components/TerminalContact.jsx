import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { Fragment, useEffect, useRef, useState } from 'react';

const TerminalContact = () => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <section className='bg-black-600 px-4 py-12'>
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className='tracking-tighest mx-auto h-96 w-full max-w-3xl cursor-text overflow-y-scroll rounded-lg bg-slate-950/70 text-xs shadow-xl backdrop-blur '
      >
        <TerminalHeader />
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className='sticky top-0 flex w-full items-center gap-1 bg-slate-900 p-3'>
      <span className='absolute left-[50%] -translate-x-[50%] text-left text-sm font-semibold text-slate-200'>
        media@prglabs.ai
      </span>
    </div>
  );
};

const TerminalBody = ({ containerRef, inputRef }) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState('');

  const [questions, setQuestions] = useState(QUESTIONS);

  const curQuestion = questions.find((q) => !q.complete);

  const handleSubmitLine = (value) => {
    if (curQuestion) {
      setQuestions((pv) =>
        pv.map((q) => {
          if (q.key === curQuestion.key) {
            return {
              ...q,
              complete: true,
              value,
            };
          }
          return q;
        })
      );
    }
  };

  return (
    <div className='p-2 text-lg text-slate-100'>
      <InitialText />
      <PreviousQuestions questions={questions} />
      <CurrentQuestion curQuestion={curQuestion} />
      {curQuestion ? (
        <CurLine
          text={text}
          focused={focused}
          setText={setText}
          setFocused={setFocused}
          inputRef={inputRef}
          command={curQuestion?.key || ''}
          handleSubmitLine={handleSubmitLine}
          containerRef={containerRef}
        />
      ) : (
        <Summary questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
};

const InitialText = () => {
  return (
    <>
      <p className='text-lg'>
        Hey there! Contact us if you'd like to see a demo or just chat!
      </p>
      <p className='overflow-hidden whitespace-nowrap font-light'>
        ------------------------------------------------------------------------
      </p>
    </>
  );
};

const PreviousQuestions = ({ questions }) => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ''}
                {q.postfix && (
                  <span className='text-indigo-500'>{q.postfix}</span>
                )}
              </p>
              <p className='text-emerald-300'>
                <FiCheckCircle className='mr-2 inline-block' />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

const CurrentQuestion = ({ curQuestion }) => {
  if (!curQuestion) return <></>;

  return (
    <p>
      {curQuestion.text || ''}
      {curQuestion.postfix && (
        <span className='text-violet-300'>{curQuestion.postfix}</span>
      )}
    </p>
  );
};

const Summary = ({ questions, setQuestions }) => {
  const [complete, setComplete] = useState(false);

  const handleReset = () => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: '', complete: false })));
  };

  const handleSend = () => {
    const formData = questions.reduce((acc, val) => {
      return { ...acc, [val.key]: val.value };
    }, {});

    // Send this data to your server or whatever :)
    console.log(formData);

    setComplete(true);
  };

  return (
    <>
      <p>Beautiful! Here's what we've got:</p>
      {questions.map((q) => {
        return (
          <p key={q.key}>
            <span className='text-blue-300'>{q.key}:</span> {q.value}
          </p>
        );
      })}
      <p>Look good?</p>
      {complete ? (
        <p className='text-emerald-300'>
          <FiCheckCircle className='mr-2 inline-block' />
          <span>Sent! We'll get back to you ASAP 😎</span>
        </p>
      ) : (
        <div className='mt-2 flex gap-2'>
          <button
            onClick={handleReset}
            className='rounded bg-slate-100 px-3 py-1 text-base text-black transition-opacity hover:opacity-90'
          >
            Restart
          </button>
          <button
            onClick={handleSend}
            className='rounded bg-indigo-500 px-3 py-1 text-base text-white transition-opacity hover:opacity-90'
          >
            Send it!
          </button>
        </div>
      )}
    </>
  );
};

const CurLine = ({
  text,
  focused,
  setText,
  setFocused,
  inputRef,
  command,
  handleSubmitLine,
  containerRef,
}) => {
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmitLine(text);
    setText('');
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const onChange = (e) => {
    setText(e.target.value);
    scrollToBottom();
  };

  useEffect(() => {
    return () => setFocused(false);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChange}
          value={text}
          type='text'
          className='sr-only'
          autoComplete='off'
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
      <p>
        <span className='text-emerald-400'>➜</span>{' '}
        <span className='text-cyan-300'>~</span>{' '}
        {command && <span className='opacity-50'>Enter {command}: </span>}
        {text}
        {focused && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
              times: [0, 0.5, 0.5, 1],
            }}
            className='ml-0.5 inline-block h-5 w-2 translate-y-1 bg-slate-400'
          />
        )}
      </p>
    </>
  );
};

export default TerminalContact;

const QUESTIONS = [
  {
    key: 'email',
    text: 'To start, could you give us ',
    postfix: 'your email?',
    complete: false,
    value: '',
  },
  {
    key: 'name',
    text: "Awesome! And what's ",
    postfix: 'your name?',
    complete: false,
    value: '',
  },
  {
    key: 'description',
    text: 'Perfect, and ',
    postfix: 'how can we help you?',
    complete: false,
    value: '',
  },
];
