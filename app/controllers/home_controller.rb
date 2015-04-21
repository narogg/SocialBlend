class HomeController < ApplicationController
respond_to :html, :js
	
	# require 'twitter'
	# sferik configuration
    $client = Twitter::REST::Client.new do |config|
      config.consumer_key    = "CLDtjEH3EbZ5PikX9pgseIA14"
      config.consumer_secret = "RdRY1YFHKdnqzfyX1DVFDVQgXwkMdaS5j5PnrK31apwNmKNLIV"
	  config.access_token        = "1662947316-SYZgu8Lplat1CjOu6e9LQgoMWhp4yzt6b6yzrxh"
      config.access_token_secret = "OAD4tyKlLfPViVdvZvpKyGd8ztfJdYZpLCKSf4sfNZDfd"
	end

   
  
  def index	
	#logger.info "This is index"
	#$client.update("I'm testing!")
	#@tweet = $client.user_timeline("sferik")
	#logger.error (@tweet)
	
	#$client.search("to:justinbieber marry me", result_type: "recent").take(3).each do |tweet|
	#puts tweet.text
	#logger.info (tweet.text)
	#end
	
	@search_term = params[:q]
    logger.error(@search_term)
	
	# if no search_term it returns the app owners stream, so take cnn
	if ( @search_term.present?)
      options = {:count => 30, :include_rts => true}
      @tweets = $client.user_timeline(@search_term, options) 		  	
	  #logger.error(@tweets)
	else 		
	  #options = {:count => 30, :include_rts => true}
      #@tweets = $client.user_timeline('cnn', options)	
	  # just create an empty object and send it to front end
	  @tweets = String.new
	end
	
	# if handle doesn't exists - rescue
	rescue Twitter::Error => e
      logger.error "#{e.message}."
	
 
  end


end

	#def collect_with_max_id(collection=[], max_id=nil, &block)
	#	response = yield(max_id)
	#	collection += response
	#	response.empty? ? collection.flatten : collect_with_max_id(collection, response.last.id - 1, &block)
	#	end
	#	
	#	def $client.get_all_tweets(user)
	#	collect_with_max_id do |max_id|
	#		options = {count: 200, include_rts: true}
	#		options[:max_id] = max_id unless max_id.nil?
	#		user_timeline(user, options)
	#	end
	#	end
	#	
	#	$client.get_all_tweets("sferik")
	#