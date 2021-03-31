class Session < ApplicationRecord
  def self.create_or_load_session_id
    if Session.any?
      last_session = Session.last
      if last_session && last_session.expired == false
        @session_id = last_session.session_id
        @session_id
      elsif (last_session && last_session.expired == true) || !last_session
        @session_id = create_new_session
      else
        raise 'Something went wrong with the session creation!'
      end
    else
      @session_id = create_new_session
    end
  end
end
